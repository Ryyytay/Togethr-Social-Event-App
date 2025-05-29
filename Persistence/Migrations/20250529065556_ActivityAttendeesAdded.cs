using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Persistence.Migrations
{
    /// <inheritdoc />
    public partial class ActivityAttendeesAdded : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ActivityAttendees_Activities_UserId",
                table: "ActivityAttendees");

            migrationBuilder.AddForeignKey(
                name: "FK_ActivityAttendees_Activities_ActivityId",
                table: "ActivityAttendees",
                column: "ActivityId",
                principalTable: "Activities",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ActivityAttendees_Activities_ActivityId",
                table: "ActivityAttendees");

            migrationBuilder.AddForeignKey(
                name: "FK_ActivityAttendees_Activities_UserId",
                table: "ActivityAttendees",
                column: "UserId",
                principalTable: "Activities",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
