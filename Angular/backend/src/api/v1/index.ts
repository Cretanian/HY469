import { ContactsController } from './contacts/contacts.controller';
import * as express from 'express';
import { ResourceController } from '../shared';
import { ITask, TaskModel } from '@app/models';
import { FilesController } from './files/files.controller';
import { SocketEventsController } from './socket-events/socket-events.controller';
import { ExampleController } from './example/example.controller';
import { TeamsListController } from './Cretanian/lists/teams-list/teams-list.controller';
import { SmarthomeListController } from './Cretanian/lists/smarthome-list/smarthome-list.controller';
import { OnlineDevicesListController } from './Cretanian/lists/online-devices-list/online-devices-list.controller';
import { FilesHeadersController } from './Cretanian/files-headers/files-headers.controller';
import { ChatHeadersController } from './Cretanian/chat-headers/explrorer-chat.controller';

const apiV1Router = express.Router();

apiV1Router
  // Sockets events routes
  .use(
    '/socket-events',
    new SocketEventsController().applyRoutes()
  )

  // Sockets events routes
  .use(
    '/files',
    new FilesController().applyRoutes()
  )

  // Task routes
  .use(
    '/tasks',
    new ResourceController<ITask>(TaskModel).applyRoutes()
  )

  // Example routes
  .use(
    '/example',
    new ExampleController().applyRoutes()
  )

  .use(
    '/contacts',
    new ContactsController().applyRoutes()
  )

  .use(
    '/smarthome-list',
    new SmarthomeListController().applyRoutes()
  )

  .use(
    '/online-devices-list',
    new OnlineDevicesListController().applyRoutes()
  )
  
  .use(
    '/files-headers',
    new FilesHeadersController().applyRoutes()
  )

  .use(
    '/chat-headers',
    new ChatHeadersController().applyRoutes()
  )
 
  .use(
    '/teams-list',
    new TeamsListController().applyRoutes()
  );
  
export { apiV1Router };
