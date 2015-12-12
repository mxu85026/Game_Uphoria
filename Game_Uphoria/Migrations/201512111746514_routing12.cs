namespace Game_Uphoria.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class routing12 : DbMigration
    {
        public override void Up()
        {
            DropForeignKey("dbo.Customers", "UserId", "dbo.AspNetUsers");
            DropForeignKey("dbo.Customers", "Orders_Id", "dbo.Orders");
            DropIndex("dbo.Customers", new[] { "UserId" });
            DropIndex("dbo.Customers", new[] { "Orders_Id" });
            AddColumn("dbo.AspNetUsers", "Name", c => c.String());
            AddColumn("dbo.AspNetUsers", "Address", c => c.String());
            AddColumn("dbo.AspNetUsers", "City", c => c.String());
            AddColumn("dbo.AspNetUsers", "State", c => c.String());
            AddColumn("dbo.AspNetUsers", "ZipCode", c => c.Int(nullable: false));
            AddColumn("dbo.AspNetUsers", "Orders_Id", c => c.Int());
            CreateIndex("dbo.AspNetUsers", "Orders_Id");
            AddForeignKey("dbo.AspNetUsers", "Orders_Id", "dbo.Orders", "Id");
            DropTable("dbo.Customers");
        }
        
        public override void Down()
        {
            CreateTable(
                "dbo.Customers",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Name = c.String(),
                        Address = c.String(),
                        City = c.String(),
                        State = c.String(),
                        ZipCode = c.Int(nullable: false),
                        PhoneNumber = c.Int(nullable: false),
                        Email = c.String(),
                        UserId = c.String(maxLength: 128),
                        Orders_Id = c.Int(),
                    })
                .PrimaryKey(t => t.Id);
            
            DropForeignKey("dbo.AspNetUsers", "Orders_Id", "dbo.Orders");
            DropIndex("dbo.AspNetUsers", new[] { "Orders_Id" });
            DropColumn("dbo.AspNetUsers", "Orders_Id");
            DropColumn("dbo.AspNetUsers", "ZipCode");
            DropColumn("dbo.AspNetUsers", "State");
            DropColumn("dbo.AspNetUsers", "City");
            DropColumn("dbo.AspNetUsers", "Address");
            DropColumn("dbo.AspNetUsers", "Name");
            CreateIndex("dbo.Customers", "Orders_Id");
            CreateIndex("dbo.Customers", "UserId");
            AddForeignKey("dbo.Customers", "Orders_Id", "dbo.Orders", "Id");
            AddForeignKey("dbo.Customers", "UserId", "dbo.AspNetUsers", "Id");
        }
    }
}
