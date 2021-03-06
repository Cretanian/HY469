import { Request, Response, NextFunction, Router } from "express";
import { NotFound, BadRequest } from "http-errors";
import { DIContainer, MinioService, SocketsService } from "@app/services";
import { logger } from "../../../utils/logger";

export class TvGridController {
  public data: object[];
  public dataTable: object[];
  /**
   * Apply all routes for example
   *
   * @returns {Router}
   */
  public applyRoutes(): Router {
    const router = Router();
    router
      .get("/getAllMobile", this.getAllMobile)
      .get("/getAllTable", this.getAllTable);
    return router;
  }

  constructor() {
    this.data = [
      {
        title: "1 Main",
        src: "./assets/tv-grid/1 Main.png",
        id: 0,
      },
      {
        title: "1 Main + Chat",
        src: "./assets/tv-grid/1 Main + Chat.png",
        id: 1,
      },
      {
        title: "3 Main",
        src: "./assets/tv-grid/3 Main.png",
        id: 2,
      },
      {
        title: "2x2 Main + Chat",
        src: "./assets/tv-grid/2x2 Main + Chat.png",
        id: 3,
      },
      {
        title: "3x3 main",
        src: "./assets/tv-grid/3x3 main.png",
        id: 4,
      },
    ];

    this.dataTable = [
      {
        title: "1 Main",
        src: "../assets/table-tvgrid/1 Main.png",
        id: 0,
      },
      {
        title: "1 Main + Chat",
        src: "../assets/table-tvgrid/1 Main + Chat.png",
        id: 1,
      },
      {
        title: "3 Main",
        src: "../assets/table-tvgrid/3 Main.png",
        id: 2,
      },
      {
        title: "2x2 Main + Chat",
        src: "../assets/table-tvgrid/2x2 Main + Chat.png",
        id: 3,
      },
      {
        title: "3x3 main",
        src: "../assets/table-tvgrid/3x3 Main.png",
        id: 4,
      },
    ];
  }

  /**
   * Broadcasts a received message to all connected clients
   */
  public getAllMobile = (req: Request, res: Response) => {
    res.send(this.data);
  };

  /**
   * Broadcasts a received message to all connected clients
   */
  public getAllTable = (req: Request, res: Response) => {
    res.send(this.dataTable);
  };
}
