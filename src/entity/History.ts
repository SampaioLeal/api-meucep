import { Entity, ObjectIdColumn, ObjectID, Column } from 'typeorm';

@Entity({ name: 'histories' })
export class History {
  @ObjectIdColumn()
  id!: ObjectID;

  @Column()
  searched_at!: Date;

  @Column()
  cep!: string;

  @Column()
  city!: string;

  @Column()
  uf!: string;
}
