import { Controller, Post, Req, UseGuards } from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'
import { PrismaService } from 'src/prisma/prisma.service'
import { UserPayload } from 'src/auth/jwt.strategy'
import { CurrentUser } from 'src/auth/current-user-decorator'

@Controller('/questions')
@UseGuards(AuthGuard('jwt'))
export class CreateQuestionsController {
  constructor(private prisma: PrismaService) {}

  @Post()
  async handle(@CurrentUser() user: UserPayload) {
    return user
  }
}
