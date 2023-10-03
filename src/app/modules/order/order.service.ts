import { UserRole } from '@prisma/client';
import httpStatus from 'http-status';
import ApiError from '../../../errors/apiError';
import prisma from '../../../shared/prisma';
import { ICreateOrderData } from './order.interface'

const createOrder = async (
  id: string,
  role: string,
  data: ICreateOrderData
) => {
  if (role !== UserRole.customer) {
    throw new ApiError(
      httpStatus.UNAUTHORIZED,
      'You are not authorized to create an order!'
    );
  }

  const { orderedBooks } = data;

  const result = await prisma.order.create({
    data: {
      userId: id,
      orderedBooks: {
        create: orderedBooks.map((item: any) => ({
          bookId: item.bookId,
          quantity: item.quantity,
        })),
      },
    },
    include: {
      orderedBooks: true,
    },
  });

  return result;
};

export const OrderService = {
  createOrder,
};
