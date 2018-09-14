export interface Speaker {
  Id: number;
  DisplayName: string;
  Bio: string;
  Twitter: string;
  Website: string;
  Sessions: [{ Id: number; Title: string }];
}
