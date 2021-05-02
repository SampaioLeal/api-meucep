import { Entity, ObjectIdColumn, ObjectID, Column } from 'typeorm';

@Entity()
export class CEP {
  @ObjectIdColumn()
  id!: ObjectID;

  @Column({
    unique: true,
  })
  cep!: string;

  @Column()
  city!: string;

  @Column()
  uf!: string;

  @Column()
  district!: string;

  @Column()
  publicPlace!: string;

  @Column()
  complement!: string;

  @Column()
  ddd!: string;
}
