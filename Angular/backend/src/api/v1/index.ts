import { TvGridController } from './tvgrid/tvgrid.controller';
import { ActivityController } from './activity/activity.controller';
import { ParticipantsController } from './participants/participants.controller';
import { ContactsController } from './contacts/contacts.controller';
import * as express from 'express';
import { ResourceController } from '../shared';
import { ITask, TaskModel } from '@app/models';
import { FilesController } from './files/files.controller';
import { SocketEventsController } from './socket-events/socket-events.controller';
import { ExampleController } from './example/example.controller';

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
    '/participants',
    new ParticipantsController().applyRoutes()
  )
  
  .use(
    '/activity',
    new ActivityController().applyRoutes()
  )
  
  .use(
    '/tvgrid',
    new TvGridController().applyRoutes()
  );

  
export { apiV1Router };
