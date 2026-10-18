-- CreateEnum
CREATE TYPE "AdminRoleLabel" AS ENUM ('CEO', 'CO_FOUNDER', 'WEB_ADMIN');

-- CreateEnum
CREATE TYPE "EnquiryProgram" AS ENUM ('CRPC', 'DAAP', 'GENERAL_INQUIRY');

-- CreateEnum
CREATE TYPE "EnquiryStatus" AS ENUM ('NEW', 'CONTACTED', 'IN_PROGRESS', 'RESOLVED');

-- CreateEnum
CREATE TYPE "CertificateType" AS ENUM ('WORKSHOP_PARTICIPATION', 'COURSE_COMPLETION');

-- CreateEnum
CREATE TYPE "CertificateStatus" AS ENUM ('ACTIVE', 'DEACTIVATED');

-- CreateTable
CREATE TABLE "admin_users" (
    "id" UUID NOT NULL,
    "email" VARCHAR(254) NOT NULL,
    "name" VARCHAR(120) NOT NULL,
    "role_label" "AdminRoleLabel" NOT NULL,
    "password_hash" VARCHAR(255) NOT NULL,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "password_changed_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "last_login_at" TIMESTAMPTZ(6),
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL,

    CONSTRAINT "admin_users_pkey" PRIMARY KEY ("id"),
    CONSTRAINT "admin_users_email_normalized_chk" CHECK ("email" = LOWER(TRIM("email")))
);

-- CreateTable
CREATE TABLE "admin_sessions" (
    "id" UUID NOT NULL,
    "admin_user_id" UUID NOT NULL,
    "token_hash" CHAR(64) NOT NULL,
    "csrf_token" VARCHAR(128) NOT NULL,
    "ip_address" VARCHAR(64),
    "user_agent" VARCHAR(512),
    "expires_at" TIMESTAMPTZ(6) NOT NULL,
    "revoked_at" TIMESTAMPTZ(6),
    "last_seen_at" TIMESTAMPTZ(6),
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "admin_sessions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "rate_limit_buckets" (
    "key" VARCHAR(200) NOT NULL,
    "points" INTEGER NOT NULL,
    "window_expires_at" TIMESTAMPTZ(6) NOT NULL,

    CONSTRAINT "rate_limit_buckets_pkey" PRIMARY KEY ("key"),
    CONSTRAINT "rate_limit_buckets_points_nonnegative_chk" CHECK ("points" >= 0)
);

-- CreateTable
CREATE TABLE "contact_enquiries" (
    "id" UUID NOT NULL,
    "full_name" VARCHAR(160) NOT NULL,
    "phone" VARCHAR(32) NOT NULL,
    "email" VARCHAR(254) NOT NULL,
    "program" "EnquiryProgram" NOT NULL,
    "message" TEXT,
    "status" "EnquiryStatus" NOT NULL DEFAULT 'NEW',
    "resolved_at" TIMESTAMPTZ(6),
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL,

    CONSTRAINT "contact_enquiries_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "enquiry_notes" (
    "id" UUID NOT NULL,
    "enquiry_id" UUID NOT NULL,
    "author_id" UUID NOT NULL,
    "body" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "enquiry_notes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "certificate_import_stagings" (
    "id" UUID NOT NULL,
    "admin_session_id" UUID NOT NULL,
    "admin_user_id" UUID NOT NULL,
    "file_name" VARCHAR(255) NOT NULL,
    "file_sha256" CHAR(64) NOT NULL,
    "sheet_name" VARCHAR(255) NOT NULL,
    "header_row_index" INTEGER NOT NULL,
    "column_mapping" JSONB NOT NULL,
    "validated_rows" JSONB NOT NULL,
    "preview_counts" JSONB NOT NULL,
    "expires_at" TIMESTAMPTZ(6) NOT NULL,
    "consumed_at" TIMESTAMPTZ(6),
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "certificate_import_stagings_pkey" PRIMARY KEY ("id"),
    CONSTRAINT "certificate_import_stagings_header_row_positive_chk" CHECK ("header_row_index" >= 1)
);

-- CreateTable
CREATE TABLE "certificate_import_batches" (
    "id" UUID NOT NULL,
    "imported_by_id" UUID NOT NULL,
    "staging_id" UUID,
    "file_name" VARCHAR(255) NOT NULL,
    "file_sha256" CHAR(64) NOT NULL,
    "sheet_name" VARCHAR(255) NOT NULL,
    "header_row_index" INTEGER NOT NULL,
    "column_mapping" JSONB NOT NULL,
    "total_rows" INTEGER NOT NULL,
    "inserted_count" INTEGER NOT NULL,
    "conflict_count" INTEGER NOT NULL,
    "error_count" INTEGER NOT NULL,
    "report_summary" JSONB,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "certificate_import_batches_pkey" PRIMARY KEY ("id"),
    CONSTRAINT "certificate_import_batches_counts_nonnegative_chk" CHECK ("total_rows" >= 0 AND "inserted_count" >= 0 AND "conflict_count" >= 0 AND "error_count" >= 0)
);

-- CreateTable
CREATE TABLE "certificates" (
    "id" UUID NOT NULL,
    "certificate_id" VARCHAR(100) NOT NULL,
    "certificate_type" "CertificateType" NOT NULL DEFAULT 'WORKSHOP_PARTICIPATION',
    "status" "CertificateStatus" NOT NULL DEFAULT 'ACTIVE',
    "participant_name" VARCHAR(200) NOT NULL,
    "workshop_name" VARCHAR(255) NOT NULL,
    "institution_or_venue" VARCHAR(255),
    "event_date" DATE,
    "event_date_text" VARCHAR(120),
    "extra_metadata" JSONB,
    "import_batch_id" UUID,
    "deactivated_reason" TEXT,
    "deactivated_at" TIMESTAMPTZ(6),
    "created_by_id" UUID NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL,

    CONSTRAINT "certificates_pkey" PRIMARY KEY ("id"),
    CONSTRAINT "certificates_certificate_id_normalized_chk" CHECK ("certificate_id" = UPPER(TRIM("certificate_id")))
);

-- CreateTable
CREATE TABLE "audit_logs" (
    "id" UUID NOT NULL,
    "actor_id" UUID,
    "action" VARCHAR(80) NOT NULL,
    "entity_type" VARCHAR(60) NOT NULL,
    "entity_id" VARCHAR(100) NOT NULL,
    "before_state" JSONB,
    "after_state" JSONB,
    "reason" TEXT,
    "ip_address" VARCHAR(64),
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "audit_logs_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "admin_users_email_key" ON "admin_users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "admin_users_role_label_key" ON "admin_users"("role_label");

-- CreateIndex
CREATE UNIQUE INDEX "admin_sessions_token_hash_key" ON "admin_sessions"("token_hash");

-- CreateIndex
CREATE INDEX "admin_sessions_admin_user_id_idx" ON "admin_sessions"("admin_user_id");

-- CreateIndex
CREATE INDEX "admin_sessions_expires_at_idx" ON "admin_sessions"("expires_at");

-- CreateIndex
CREATE INDEX "rate_limit_buckets_window_expires_at_idx" ON "rate_limit_buckets"("window_expires_at");

-- CreateIndex
CREATE INDEX "contact_enquiries_status_created_at_idx" ON "contact_enquiries"("status", "created_at" DESC);

-- CreateIndex
CREATE INDEX "contact_enquiries_created_at_idx" ON "contact_enquiries"("created_at" DESC);

-- CreateIndex
CREATE INDEX "contact_enquiries_email_idx" ON "contact_enquiries"("email");

-- CreateIndex
CREATE INDEX "contact_enquiries_phone_idx" ON "contact_enquiries"("phone");

-- CreateIndex
CREATE INDEX "enquiry_notes_enquiry_id_created_at_idx" ON "enquiry_notes"("enquiry_id", "created_at");

-- CreateIndex
CREATE INDEX "enquiry_notes_author_id_idx" ON "enquiry_notes"("author_id");

-- CreateIndex
CREATE INDEX "certificate_import_stagings_admin_session_id_idx" ON "certificate_import_stagings"("admin_session_id");

-- CreateIndex
CREATE INDEX "certificate_import_stagings_expires_at_idx" ON "certificate_import_stagings"("expires_at");

-- CreateIndex
CREATE UNIQUE INDEX "certificate_import_batches_staging_id_key" ON "certificate_import_batches"("staging_id");

-- CreateIndex
CREATE INDEX "certificate_import_batches_imported_by_id_idx" ON "certificate_import_batches"("imported_by_id");

-- CreateIndex
CREATE INDEX "certificate_import_batches_created_at_idx" ON "certificate_import_batches"("created_at" DESC);

-- CreateIndex
CREATE UNIQUE INDEX "certificates_certificate_id_key" ON "certificates"("certificate_id");

-- CreateIndex
CREATE INDEX "certificates_certificate_type_status_idx" ON "certificates"("certificate_type", "status");

-- CreateIndex
CREATE INDEX "certificates_participant_name_idx" ON "certificates"("participant_name");

-- CreateIndex
CREATE INDEX "certificates_import_batch_id_idx" ON "certificates"("import_batch_id");

-- CreateIndex
CREATE INDEX "audit_logs_entity_type_entity_id_created_at_idx" ON "audit_logs"("entity_type", "entity_id", "created_at" DESC);

-- CreateIndex
CREATE INDEX "audit_logs_actor_id_created_at_idx" ON "audit_logs"("actor_id", "created_at" DESC);

-- AddForeignKey
ALTER TABLE "admin_sessions" ADD CONSTRAINT "admin_sessions_admin_user_id_fkey" FOREIGN KEY ("admin_user_id") REFERENCES "admin_users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "enquiry_notes" ADD CONSTRAINT "enquiry_notes_enquiry_id_fkey" FOREIGN KEY ("enquiry_id") REFERENCES "contact_enquiries"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "enquiry_notes" ADD CONSTRAINT "enquiry_notes_author_id_fkey" FOREIGN KEY ("author_id") REFERENCES "admin_users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "certificate_import_stagings" ADD CONSTRAINT "certificate_import_stagings_admin_session_id_fkey" FOREIGN KEY ("admin_session_id") REFERENCES "admin_sessions"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "certificate_import_stagings" ADD CONSTRAINT "certificate_import_stagings_admin_user_id_fkey" FOREIGN KEY ("admin_user_id") REFERENCES "admin_users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "certificate_import_batches" ADD CONSTRAINT "certificate_import_batches_imported_by_id_fkey" FOREIGN KEY ("imported_by_id") REFERENCES "admin_users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "certificate_import_batches" ADD CONSTRAINT "certificate_import_batches_staging_id_fkey" FOREIGN KEY ("staging_id") REFERENCES "certificate_import_stagings"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "certificates" ADD CONSTRAINT "certificates_import_batch_id_fkey" FOREIGN KEY ("import_batch_id") REFERENCES "certificate_import_batches"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "certificates" ADD CONSTRAINT "certificates_created_by_id_fkey" FOREIGN KEY ("created_by_id") REFERENCES "admin_users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "audit_logs" ADD CONSTRAINT "audit_logs_actor_id_fkey" FOREIGN KEY ("actor_id") REFERENCES "admin_users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

