import { Injectable } from '@nestjs/common';
import { CreateMessageDto } from './dto/create-message.dto';
import { UpdateMessageDto } from './dto/update-message.dto';
import { Message } from './entities/message.entity';

@Injectable()
export class MessageService {
  messages: Message[] = [{name: 'test', message: 'test'}];

  create(createMessageDto: CreateMessageDto) {
    return this.messages.push(createMessageDto);
  }
  findAll() {
    return this.messages;
  }
}
