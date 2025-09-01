import express from 'express';
import cors from 'cors';
import pino from 'pino';
import pinoHttp from 'pino-http';
import swaggerUi from 'swagger-ui-express';
import { swaggerSpec } from './config/swagger';
import crypto from 'node:crypto';

const logger = pino({ level: process.env.LOG_LEVEL || 'info' });

export const createApp = () => {
  const app = express();

  app.use(cors());
  app.use(express.json());
  app.use(
    pinoHttp({
      logger,
      genReqId: (req) => (req.headers['x-request-id'] as string) || crypto.randomUUID(),
      customLogLevel: function (res, err) {
        if (res.statusCode >= 400 && res.statusCode < 500) return 'warn';
        if (res.statusCode >= 500 || err) return 'error';
        return 'info';
      },
    }),
  );

  app.get('/health', (_req, res) => {
    res.json({ ok: true });
  });

  app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

  // Central error handler
  app.use((err: any, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
    const status = typeof err.status === 'number' ? err.status : 500;
    const code = err.code || (status >= 500 ? 'INTERNAL_ERROR' : 'BAD_REQUEST');
    logger.error({ err }, 'Request failed');
    res.status(status).json({ error: { code, message: err.message || 'Unexpected error' } });
  });

  return app;
};

if (require.main === module) {
  const app = createApp();
  const port = Number(process.env.PORT || 3000);
  app.listen(port, () => logger.info({ port }, 'Server started'));
}
