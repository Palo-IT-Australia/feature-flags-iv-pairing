import express, { Request, Response } from "express";

class App {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public app: any;

  constructor() {
    this.app = express();
    this.mountRoutes();
  }

  private mountRoutes(): void {
    const router = express.Router();

    router.get("/", (req: Request, res: Response) => {
      res.json({ message: "ok" });
    });

    this.app.use("/", router);
  }
}

export default new App().app;
