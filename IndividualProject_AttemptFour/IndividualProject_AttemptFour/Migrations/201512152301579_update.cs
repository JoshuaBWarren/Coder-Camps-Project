namespace IndividualProject_AttemptFour.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class update : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Reviews", "Stars", c => c.Int(nullable: false));
            DropColumn("dbo.Reviews", "StarRating");
        }
        
        public override void Down()
        {
            AddColumn("dbo.Reviews", "StarRating", c => c.Int(nullable: false));
            DropColumn("dbo.Reviews", "Stars");
        }
    }
}
