import { Injectable } from '@nestjs/common';
import { CreateMessageDto } from './dto/create-message.dto';
import { UpdateMessageDto } from './dto/update-message.dto';
import { Message } from './entities/message.entity';

@Injectable()
export class MessageService {
  messages: Message[] = [{name: 'leos', message: 'naber aşko'}];
  clintToUser = {};

  identfy(clintId:string,name:string){
    this.clintToUser[clintId] = name;
    return Object.values(this.clintToUser);
  }

  getClientName(clintId:string){
    return this.clintToUser[clintId];
  }

  create(createMessageDto: CreateMessageDto) {
    const message = {...createMessageDto};
    this.messages.push(message);
    return message;
  }
  findAll() {
    return this.messages;
  }
}
