export interface Level {
  Id: number;
  Text: string;
}

export interface Tag {
  Id?: number;
  Text?: string;
}

export interface TimeSlot {
  StartTime?: string;
  EndTime?: string;
  DisplayDateTime?: string;
}

export interface Session {
  Id: number;
  Title: string;
  Abstract: string;
  Room?: string;
  SessionLength?: number;
  EventId?: number;
  Level?: Level;
  RoomId?: string | number;
  TimeSlotId?: string | number;
  Tags: Array<Tag>;
  Speaker: { Id: number; DisplayName: string };
  TimeSlot?: TimeSlot;
}
