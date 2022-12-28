import { WebSocketGateway, SubscribeMessage, MessageBody } from '@nestjs/websockets';
import { MessageService } from './message.service';
import { CreateMessageDto } from './dto/create-message.dto';
import { UpdateMessageDto } from './dto/update-message.dto';

@WebSocketGateway(
  {
    cors: {
      origin: '*',
    }
  }
)
export class MessageGateway {
  constructor(private readonly messageService: MessageService) {}

  @SubscribeMessage('createMessage')
  create(@MessageBody() createMessageDto: CreateMessageDto) {
    return this.messageService.create(createMessageDto);
  }

  @SubscribeMessage('findAllMessage')
  findAll() {
    return this.messageService.findAll();
  }
  @SubscribeMessage('message')
  joinRoom(){

  }

  @SubscribeMessage('typing')
  async typing(){
    
  }
}
