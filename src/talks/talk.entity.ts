import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Talk {
  constructor(partial: Partial<any>) {
    Object.assign(this, partial);
  }

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  presenter: string;

  @Column()
  description: string;

  @Column({ type: 'timestamp' })
  date: string
}
