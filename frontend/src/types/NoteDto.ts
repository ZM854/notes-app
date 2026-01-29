export type CreateNoteDto = {
  title: string;
  description: string;
};

export type UpdateNoteDto = Partial<CreateNoteDto>;
