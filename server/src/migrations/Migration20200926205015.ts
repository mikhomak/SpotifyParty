import { Migration } from '@mikro-orm/migrations';

export class Migration20200926205015 extends Migration {

  async up(): Promise<void> {
    this.addSql('alter table "party_model" add column "users_amount" int4 not null default 0;');
    this.addSql('alter table "party_model" drop column "current_users_amount";');
  }

}
