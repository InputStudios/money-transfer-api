import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm/dist";
import { Services } from "../utils/constants";
import { User } from "../utils/typeorm";
import { UserController } from "./user.cotroller";
import { UserService } from "./user.service";

@Module({
	imports: [TypeOrmModule.forFeature([User])], 
	controllers: [UserController], 
	providers: [
		{
			provide: Services.USERS,
			useClass: UserService,
		},
	],
	exports: [
		{
			provide: Services.USERS,
			useClass: UserService,
		},
	],
})
export class UserModule {}
