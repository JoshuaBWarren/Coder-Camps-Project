namespace IndividualProject_AttemptFour.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class starRating : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Reviews", "StarRating", c => c.Int(nullable: false));
            DropColumn("dbo.Reviews", "ImageUrl");
        }
        
        public override void Down()
        {
            AddColumn("dbo.Reviews", "ImageUrl", c => c.String());
            DropColumn("dbo.Reviews", "StarRating");
        }
    }
}
