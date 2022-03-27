export interface EventInterface {
    id: number;
    
    title: string;

    description: string;
  
    isMain: boolean;
  
    isPublished: boolean;
  
    startTime: Date;
  
    endTime: Date;
  
    src: string;
  
    img: string;
}