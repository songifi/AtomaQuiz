import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBody } from '@nestjs/swagger';
import { AtomaService } from './providers/atoma.service';
import { AtomaDTO } from './dtos/create-atoma.dto';
import { AccessTokenGuard } from 'src/auth/guard/access-token/access-token.guard';

@ApiTags('atoma') // Groups all endpoints under the 'atoma' tag in Swagger
@UseGuards(AccessTokenGuard)
@Controller('atoma')
export class AtomaController {
  constructor(private readonly atomaService: AtomaService) {}

  // Sign up a new admin
    @Post('create')
    @ApiOperation({
      summary: 'Start the Atoma SDK',
      description: 'Create a new chat session with the Atoma SDK.',
    })
    @ApiBody({ type: AtomaDTO })
    @ApiResponse({
      status: 201,
      description: 'Chat successfully created',
    })
    @ApiResponse({
      status: 400,
      description: 'Invalid input',
    })
    start(@Body() atomaDTO: AtomaDTO) {
      return this.atomaService.start(atomaDTO);
    }

  
}
