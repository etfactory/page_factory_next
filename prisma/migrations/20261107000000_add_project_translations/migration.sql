ALTER TABLE "Project"
ADD COLUMN IF NOT EXISTS "description_ko" TEXT,
ADD COLUMN IF NOT EXISTS "description_en" TEXT,
ADD COLUMN IF NOT EXISTS "modal_description_ko" TEXT,
ADD COLUMN IF NOT EXISTS "modal_description_en" TEXT;
