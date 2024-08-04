import { IController } from '../interface/IController';

class HealthController implements IController {
  public getHealth() {
    return { status: 'UP' };
  }
}

export default HealthController;
