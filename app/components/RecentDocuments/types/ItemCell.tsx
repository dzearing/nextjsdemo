export type ItemCell =
  | {
      type: 'name';
      iconType: 'docx';
      text: string;
      subText: string;
    }
  | {
      type: 'text';
      text: string;
    }
  | {
      type: 'reply';
      text: string;
      subject: string;
      recipient: string;
      time: string;
    };
