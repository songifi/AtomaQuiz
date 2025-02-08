import { Module, forwardRef } from '@nestjs/common';
import { AtomaController } from './atoma.controller';
import { AtomaService } from './providers/atoma.service';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import jwtConfig from 'src/auth/authConfig/jwt.config';

@Module({
  controllers: [AtomaController],
  providers: [
    AtomaService,
  ],
  imports: [
    ConfigModule.forFeature(jwtConfig),
    JwtModule.registerAsync(jwtConfig.asProvider()),
  ],
})
export class AtomaModule {}
