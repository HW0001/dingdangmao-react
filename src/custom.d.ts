type Tag = {
  id:string;
  name:string;
  iconName?:string;
}

type RecordItem={
  tags:string[];
  notes: string;
  category: "-" | "+";
  amount: string;
  recordAT: string;
}