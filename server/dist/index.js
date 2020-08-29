"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DAO = void 0;
require("reflect-metadata");
const core_1 = require("@mikro-orm/core");
const mikro_orm_config_1 = __importDefault(require("./mikro-orm.config"));
const express_1 = __importDefault(require("express"));
const apollo_server_express_1 = require("apollo-server-express");
const type_graphql_1 = require("type-graphql");
const PartyResolver_1 = require("./resolvers/PartyResolver");
const PartyModel_1 = require("./entities/PartyModel");
const cors_1 = __importDefault(require("cors"));
exports.DAO = {};
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    exports.DAO.orm = yield core_1.MikroORM.init(mikro_orm_config_1.default);
    yield exports.DAO.orm.getMigrator().up();
    exports.DAO.em = exports.DAO.orm.em;
    exports.DAO.partyRepository = exports.DAO.orm.em.getRepository(PartyModel_1.PartyModel);
    const app = express_1.default();
    app.use(cors_1.default({
        origin: 'http://localhost:3000',
        credentials: true,
    }));
    const apolloServer = new apollo_server_express_1.ApolloServer({
        schema: yield type_graphql_1.buildSchema({
            resolvers: [PartyResolver_1.PartyResolver],
            validate: false
        }),
        context: () => ({ em: exports.DAO.orm.em })
    });
    apolloServer.applyMiddleware({ app, cors: false });
    app.listen(3700, () => {
        console.log("server started on port 3700");
    });
});
main().catch((err) => {
    console.error(err);
});
//# sourceMappingURL=index.js.map