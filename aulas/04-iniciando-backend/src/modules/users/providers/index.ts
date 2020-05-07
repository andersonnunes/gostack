import { container } from 'tsyringe';

import IHashProvider from './models/IHashProvider';
import BCryptHashProvider from './implementations/BcryptHashProvider';

container.registerSingleton<IHashProvider>('HashProvider', BCryptHashProvider);
