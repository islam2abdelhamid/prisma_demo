-- DropForeignKey
ALTER TABLE "Table" DROP CONSTRAINT "Table_reservationId_fkey";

-- AddForeignKey
ALTER TABLE "Reservation" ADD CONSTRAINT "Reservation_tableId_fkey" FOREIGN KEY ("tableId") REFERENCES "Table"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
