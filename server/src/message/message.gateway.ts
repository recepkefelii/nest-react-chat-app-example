import { WebSocketGateway, SubscribeMessage, MessageBody, WebSocketServer, ConnectedSocket } from '@nestjs/websockets';
import { MessageService } from './message.service';
import { CreateMessageDto } from './dto/create-message.dto';
import { UpdateMessageDto } from './dto/update-message.dto';
import { Server,Socket } from 'socket.io';

@WebSocketGateway(
  {
    cors: {
      origin: '*',
    }
  }
)
export class MessageGateway {
  @WebSocketServer()
  server:Server;
  constructor(private readonly messageService: MessageService) {}

  @SubscribeMessage('createMessage')
  async create(@MessageBody() createMessageDto: CreateMessageDto) {
    const message = await this.messageService.create(createMessageDto);
    this.server.emit('message', message);
    return message;
  }

  @SubscribeMessage('findAllMessage')
  findAll() {    
    return this.messageService.findAll();
  }
  @SubscribeMessage('message')
  joinRoom(@MessageBody('name') name:string, @ConnectedSocket() clint:Socket){
    console.log(name,clint.id);
    
    return this.messageService.identfy(name,clint.id);
  }

  @SubscribeMessage('typing')
  async typing(@MessageBody('isTyping') isTyping:boolean, @ConnectedSocket() client:Socket){
    const name = await this.messageService.getClientName(client.id);

    client.broadcast.emit('typing', {name, isTyping});
  }
}
