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
      applications: {
        Row: {
          applicant_contact: string | null
          applicant_name: string | null
          applicant_resume: string | null
          applicant_user_id: string | null
          applicant_website: string | null
          application_content: string | null
          application_created_at: string
          id: number
          project_id: number | null
          project_owner_user_id: string | null
          selected: boolean
        }
        Insert: {
          applicant_contact?: string | null
          applicant_name?: string | null
          applicant_resume?: string | null
          applicant_user_id?: string | null
          applicant_website?: string | null
          application_content?: string | null
          application_created_at?: string
          id?: number
          project_id?: number | null
          project_owner_user_id?: string | null
          selected?: boolean
        }
        Update: {
          applicant_contact?: string | null
          applicant_name?: string | null
          applicant_resume?: string | null
          applicant_user_id?: string | null
          applicant_website?: string | null
          application_content?: string | null
          application_created_at?: string
          id?: number
          project_id?: number | null
          project_owner_user_id?: string | null
          selected?: boolean
        }
        Relationships: [
          {
            foreignKeyName: "applications_applicant_user_id_fkey"
            columns: ["applicant_user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "applications_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "applications_project_owner_user_id_fkey"
            columns: ["project_owner_user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          }
        ]
      }
      article_tags: {
        Row: {
          created_at: string
          id: number
          tag: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          tag?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          tag?: string | null
        }
        Relationships: []
      }
      articles: {
        Row: {
          article_content: string | null
          article_image_url: string | null
          article_slug: string | null
          article_title: string | null
          article_writer_name: string | null
          article_writer_user_id: string | null
          created_at: string
          id: number
        }
        Insert: {
          article_content?: string | null
          article_image_url?: string | null
          article_slug?: string | null
          article_title?: string | null
          article_writer_name?: string | null
          article_writer_user_id?: string | null
          created_at?: string
          id?: number
        }
        Update: {
          article_content?: string | null
          article_image_url?: string | null
          article_slug?: string | null
          article_title?: string | null
          article_writer_name?: string | null
          article_writer_user_id?: string | null
          created_at?: string
          id?: number
        }
        Relationships: [
          {
            foreignKeyName: "articles_article_writer_user_id_fkey"
            columns: ["article_writer_user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
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
          articles_admin: boolean
          avatar_url: string | null
          branch: string | null
          buyer: string | null
          college: string | null
          email: string | null
          full_name: string | null
          id: string
          semester: string | null
          updated_at: string | null
          user_email: string | null
          username: string | null
          website: string | null
        }
        Insert: {
          articles_admin?: boolean
          avatar_url?: string | null
          branch?: string | null
          buyer?: string | null
          college?: string | null
          email?: string | null
          full_name?: string | null
          id: string
          semester?: string | null
          updated_at?: string | null
          user_email?: string | null
          username?: string | null
          website?: string | null
        }
        Update: {
          articles_admin?: boolean
          avatar_url?: string | null
          branch?: string | null
          buyer?: string | null
          college?: string | null
          email?: string | null
          full_name?: string | null
          id?: string
          semester?: string | null
          updated_at?: string | null
          user_email?: string | null
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
          },
          {
            foreignKeyName: "profiles_user_email_fkey"
            columns: ["user_email"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["email"]
          }
        ]
      }
      projects: {
        Row: {
          created_at: string
          delivery: string | null
          description: string | null
          id: number
          image: string | null
          location: string | null
          part_time: boolean | null
          price: number | null
          tags: string[] | null
          title: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string
          delivery?: string | null
          description?: string | null
          id?: number
          image?: string | null
          location?: string | null
          part_time?: boolean | null
          price?: number | null
          tags?: string[] | null
          title?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string
          delivery?: string | null
          description?: string | null
          id?: number
          image?: string | null
          location?: string | null
          part_time?: boolean | null
          price?: number | null
          tags?: string[] | null
          title?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "projects_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
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

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (Database["public"]["Tables"] & Database["public"]["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (Database["public"]["Tables"] &
      Database["public"]["Views"])
  ? (Database["public"]["Tables"] &
      Database["public"]["Views"])[PublicTableNameOrOptions] extends {
      Row: infer R
    }
    ? R
    : never
  : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Insert: infer I
    }
    ? I
    : never
  : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Update: infer U
    }
    ? U
    : never
  : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof Database["public"]["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof Database["public"]["Enums"]
  ? Database["public"]["Enums"][PublicEnumNameOrOptions]
  : never
