import { Entity, ObjectIdColumn, ObjectID, Column } from 'typeorm';

@Entity()
export class History {
  @ObjectIdColumn()
  id!: ObjectID;

  @Column()
  cep!: string;

  @Column()
  city!: string;

  @Column()
  uf!: string;
}
