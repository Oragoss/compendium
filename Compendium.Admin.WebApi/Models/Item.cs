using System;

namespace Compendium.Admin.WebApi.Models
{
    public class Item
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public string Subject { get; set; }
        public string Type { get; set; }
        public bool IsPublic { get; set; }
        public bool IsValid { get; set; }
        public string Creator { get; set; }
        public string Contributers { get; set; } //New table?
        public string Coverage { get; set; }
        public DateTime Date { get; set; }
        public string Format { get; set; }
        public string Identifier { get; set; }
        public string Language { get; set; }
        public string Publisher { get; set; }
        public string Relation { get; set; }
        public string Rights { get; set; }  //New table?
        public string Source { get; set; }
        public string Abstract { get; set; }
        public string AccessRights { get; set; }
        public string AccrualMethod { get; set; }
        public string AccrualPeriodicity { get; set; }
        public string Alternative { get; set; }
        public string Audience { get; set; }
        public bool Available { get; set; }
        public string BibliographicCitation { get; set; }
        public string ConformsTo { get; set; }
        public string Created { get; set; }
        public DateTime DateAccepted { get; set; }
        public DateTime DateCopyrighted { get; set; }
        public DateTime DateSubmitted { get; set; }
        public DateTime DateCreatedOn { get; set; }
        public DateTime DateModifiedOn { get; set; }
        public string EducationLevel { get; set; }
        public string InstructionalMethod { get; set; }
        public string Extent { get; set; }
        public bool HasFormat { get; set; }
        public bool HasPart { get; set; }
        public bool HasVersion { get; set; }
        public string IsFormatOf { get; set; }
        public string IsPartOf { get; set; }
        public string IsReferencedBy { get; set; }
        public string IsReplacedBy { get; set; }
        public string IsRequiredBy { get; set; }
        public string Issued { get; set; }
        public string IsVersionOf { get; set; }
        public string License { get; set; }
        public string Mediator { get; set; }
        public string Medium { get; set; }
        public string Modified { get; set; }        //Is there a difference between this and DateModifiedOn?
        public string Provenance { get; set; }
        public string References { get; set; }      //New Table?
        public string Replaces { get; set; }        //New Table?
        public string Requires { get; set; }        //New Table
        public string RightsHolder { get; set; }
        public string Spatial { get; set; }
        public string TableOfContents { get; set; }
        public string Temporal { get; set; }
    }
}
