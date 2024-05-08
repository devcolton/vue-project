import { LoginRouter } from '@/router/common/login';
import { NotFoundRouter } from '@/router/common/notFound';

export const CommonRouter = [...LoginRouter, ...NotFoundRouter];
