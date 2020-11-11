type Tag = {
  id:string;
  name:string;
}

type RecordItem={
  tags:string[];
  notes: string;
  category: "-" | "+";
  amount: string;
  recordAT: string;
}