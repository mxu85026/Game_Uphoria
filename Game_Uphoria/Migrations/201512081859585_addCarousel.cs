namespace Game_Uphoria.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class addCarousel : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Carousels",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Image = c.String(),
                        Text = c.String(),
                    })
                .PrimaryKey(t => t.Id);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.Carousels");
        }
    }
}
