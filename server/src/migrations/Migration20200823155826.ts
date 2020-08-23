import { Migration } from '@mikro-orm/migrations';

export class Migration20200823155826 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table "party" ("id" serial primary key, "created_at" timestamptz(0) not null, "updated_at" timestamptz(0) not null);');
  }

}
