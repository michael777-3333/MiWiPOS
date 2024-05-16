import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'staffs' })
export class Staff {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  no_identificacion: string;

  @Column()
  names: string;

  @Column()
  direction: string;

  @Column()
  phone: string;

  @Column({ unique: true })
  email: string;

  @Column()
  description: string;

  @Column({ default: '0' })
  status: boolean;

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  createAt: Date;

  @Column({ nullable: true })
  updateAt: Date;
}
