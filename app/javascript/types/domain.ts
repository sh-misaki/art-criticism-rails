export namespace Domains {
  export interface Work {
    id: number;
    name: string;
    primaryImage: string | null;
    primaryImageSmall: string | null;
    department: string | null;
    classification: string | null;
    year: string | null;
    artist_id: string | null;
    artist_name: string | null;
    source: "metropolitan" | null;
    source_id: string | null;
    created_at: Date;
    updated_at: Date;
  }
  export interface Artist {
    id: number;
    name: string;
    nationality: string | null;
    beginYear: number | null;
    endYear: number | null;
    role: string | null;
  }
}
