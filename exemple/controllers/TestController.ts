import { Controller, Get, Params, Headers, OpenApi, Render,View,RenderFile } from "../../lib";
import { TwingEnvironment } from 'twing';
import path from 'path';
@Controller({ prefix: '/api' })
export default class TestController {

    @OpenApi({
        responses: {
            '200': {
                '$ref': '',
                'description': 'Response',
            }
        }
    })
    @Get('/user/:id')
    public async getUser(@Params('id') id: number, @Headers('authorization') authorization) {
        return {
            name: 'user', 
            params: id,
            authorization: authorization
        }
    }

    @Render('users.index')
    @Get('/users')
    public async index(@View() twig: TwingEnvironment){
        return {title: 'Index'}
    }

    @RenderFile(path.join('exemple', 'storage'), true)
    @Get('/file')
    public async file(){
        return 'images/b1.jpg'
    }
}