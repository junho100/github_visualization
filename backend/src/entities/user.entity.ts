import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class UserEntity {
  @PrimaryColumn()
  id: string;

  @Column()
  username: string;

  @Column()
  total: number;
}
