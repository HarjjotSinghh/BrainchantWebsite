export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      notes: {
        Row: {
          created_at: string
          id: number
          link: string
          semester: number
          subject: string
          title: string
        }
        Insert: {
          created_at?: string
          id?: number
          link: string
          semester?: number
          subject: string
          title: string
        }
        Update: {
          created_at?: string
          id?: number
          link?: string
          semester?: number
          subject?: string
          title?: string
        }
        Relationships: []
      }
      profiles: {
        Row: {
          avatar_url: string | null
          college: string | null
          email: string | null
          full_name: string | null
          id: string
          updated_at: string | null
          username: string | null
          website: string | null
        }
        Insert: {
          avatar_url?: string | null
          college?: string | null
          email?: string | null
          full_name?: string | null
          id: string
          updated_at?: string | null
          username?: string | null
          website?: string | null
        }
        Update: {
          avatar_url?: string | null
          college?: string | null
          email?: string | null
          full_name?: string | null
          id?: string
          updated_at?: string | null
          username?: string | null
          website?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "profiles_id_fkey"
            columns: ["id"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      semesters: {
        Row: {
          id: number
          semester: number | null
        }
        Insert: {
          id?: number
          semester?: number | null
        }
        Update: {
          id?: number
          semester?: number | null
        }
        Relationships: []
      }
      subjects: {
        Row: {
          created_at: string
          id: number
          name: string
          semester: number
        }
        Insert: {
          created_at?: string
          id?: number
          name: string
          semester?: number
        }
        Update: {
          created_at?: string
          id?: number
          name?: string
          semester?: number
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
