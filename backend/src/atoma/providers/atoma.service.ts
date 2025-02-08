import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { AuthService } from '../../auth/providers/auth.service';
import { UserService } from 'src/user/providers/user.service';
import { SongService } from 'src/song/providers/song.service';
// import { Atoma } from '../atoma.entity';
// import { InjectRepository } from '@nestjs/typeorm';
// import { Repository } from 'typeorm'
// import { CreateAtomaProvider } from './create-Atoma.services';
import { AtomaDTO } from '../dtos/create-atoma.dto';

import { AtomaSDK } from "atoma-sdk";


// Service responsible for handling Atomaistrative operations.
@Injectable()
export class AtomaService {
  constructor(
      @Inject(forwardRef(() => AuthService))
      private readonly authService: AuthService,
  
      //Inject user service
      private readonly userService: UserService,
      private readonly songService: SongService,
      /* 
       * Inject Atoma repository
       */
      // @InjectRepository(Atoma)
      // private readonly AtomaRepository: Repository<Atoma>,
  
      //Inject create user provider
      // private readonly createAtomaProvider: CreateAtomaProvider,

      private readonly atomaSDK: AtomaSDK,

      // const atomaSDK = new AtomaSDK({
      //   bearerAuth: process.env["ATOMASDK_BEARER_AUTH"] ?? "",
      // });
    // ) {}

    ) {
      this.atomaSDK = new AtomaSDK({
        bearerAuth: process.env["ATOMASDK_BEARER_AUTH"] ?? "",
      });
    }

  // public async signUp(AtomaDTO: AtomaDTO) {
  //     // Implement sign up logic
  //     return await this.createAtomaProvider.createAtoma(AtomaDTO);
  //   }

  public async start(AtomaDTO: AtomaDTO) {
    const completion = await this.atomaSDK.chat.create({
      messages: [
        {"role": "quiz master", "content": "Start the quiz!"},
        {"role": "user", "content": "Hello!"}
      ],
      model: "meta-llama/Llama-3.3-70B-Instruct"
    });
  
    console.log(completion.choices[0]);
    return completion.choices[0];
  }

  // public async continue() {
  //   const completion = await this.atomaSDK.chat.({
  //     messages: [
  //       {"role": "quiz master", "content": "Start the quiz!"},
  //       {"role": "user", "content": "Hello!"}
  //     ],
  //     model: "meta-llama/Llama-3.3-70B-Instruct"
  //   });
  
  //   console.log(completion.choices[0]);
  //   return completion.choices[0];
  // }
  
}
