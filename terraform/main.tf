# main.tf

provider "google" {
  credentials = file("C:/Users/HI/Downloads/task-data-404610-cd09660e7286.json")
  project     = "task-data-404610"
  region      = "us-central1"
}

# 1st Create Bucket
resource "google_storage_bucket" "example_bucket" {
  name          = var.bucket_name
  location      = var.bucket_location
  force_destroy = true
}

# 2nd Create State file Bucket
terraform {
  backend "gcs" {
    bucket  = var.bucket_name
    prefix  = "demo"
  }
}

# 3rd Depends on Modules
resource "google_storage_bucket_object" "example_object" {
  name      = "file.txt"
  bucket    = google_storage_bucket.example_bucket.name
  source    = "C:/Users/HI/Desktop/statefile/file.txt"
  depends_on = [google_storage_bucket.example_bucket]
}

# 5. Print the output of a resource which you have created.
output "bucket_url" {
  value = google_storage_bucket.example_bucket.url
}

output "bucket_name" {
  value = google_storage_bucket.example_bucket.name
}

output "object_name" {
  value = google_storage_bucket_object.example_object.name
}
