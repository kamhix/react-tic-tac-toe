export default interface IGame {
  moves: [{
    squares: Array<string | null>
  }];
  ipAddress?: string;
  status: string; 
  message: string; 
}