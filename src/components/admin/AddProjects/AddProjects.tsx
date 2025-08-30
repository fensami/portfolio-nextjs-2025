"use client";

import type React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";

interface ProjectData {
  name: string;
  bannerImage: string;
  description: string;
  multipleDescriptions: string[];
  liveLink: string;
  githubLink: string;
  serverLink: string;
  technologies: string[];
  images: string[];
}

const AddProjects = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<ProjectData>({
    name: "",
    bannerImage: "",
    description: "",
    multipleDescriptions: [""],
    liveLink: "",
    githubLink: "",
    serverLink: "",
    technologies: [""],
    images: [""],
  });

  const handleInputChange = (field: keyof ProjectData, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleImageChange = (index: number, value: string) => {
    const newImages = [...formData.images];
    newImages[index] = value;
    setFormData((prev) => ({
      ...prev,
      images: newImages,
    }));
  };

  const handleMultipleDescriptionChange = (index: number, value: string) => {
    const newDescriptions = [...formData.multipleDescriptions];
    newDescriptions[index] = value;
    setFormData((prev) => ({
      ...prev,
      multipleDescriptions: newDescriptions,
    }));
  };

  const handleTechnologyChange = (index: number, value: string) => {
    const newTechnologies = [...formData.technologies];
    newTechnologies[index] = value;
    setFormData((prev) => ({
      ...prev,
      technologies: newTechnologies,
    }));
  };

  const addImageField = () => {
    setFormData((prev) => ({
      ...prev,
      images: [...prev.images, ""],
    }));
  };

  const addMultipleDescriptionField = () => {
    setFormData((prev) => ({
      ...prev,
      multipleDescriptions: [...prev.multipleDescriptions, ""],
    }));
  };

  const addTechnologyField = () => {
    setFormData((prev) => ({
      ...prev,
      technologies: [...prev.technologies, ""],
    }));
  };

  const removeImageField = (index: number) => {
    if (formData.images.length > 1) {
      const newImages = formData.images.filter((_, i) => i !== index);
      setFormData((prev) => ({
        ...prev,
        images: newImages,
      }));
    }
  };

  const removeMultipleDescriptionField = (index: number) => {
    if (formData.multipleDescriptions.length > 1) {
      const newDescriptions = formData.multipleDescriptions.filter(
        (_, i) => i !== index
      );
      setFormData((prev) => ({
        ...prev,
        multipleDescriptions: newDescriptions,
      }));
    }
  };

  const removeTechnologyField = (index: number) => {
    if (formData.technologies.length > 1) {
      const newTechnologies = formData.technologies.filter(
        (_, i) => i !== index
      );
      setFormData((prev) => ({
        ...prev,
        technologies: newTechnologies,
      }));
    }
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      alert("Project name is required");
      return false;
    }
    if (!formData.description.trim()) {
      alert("Project description is required");
      return false;
    }
    if (!formData.bannerImage.trim()) {
      alert("Banner image URL is required");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsLoading(true);

    try {
      // Filter out empty image URLs
      const filteredImages = formData.images.filter((img) => img.trim() !== "");
      const filteredMultipleDescriptions = formData.multipleDescriptions.filter(
        (desc) => desc.trim() !== ""
      );
      const filteredTechnologies = formData.technologies.filter(
        (tech) => tech.trim() !== ""
      );

      const projectData = {
        ...formData,
        images: filteredImages,
        multipleDescriptions: filteredMultipleDescriptions,
        technologies: filteredTechnologies,
      };

      const response = await fetch("http://localhost:3001/api/projects", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(projectData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      //   const result = await response.json();

      alert("Project created successfully!");

      // Reset form
      setFormData({
        name: "",
        bannerImage: "",
        description: "",
        multipleDescriptions: [""],
        liveLink: "",
        githubLink: "",
        serverLink: "",
        technologies: [""],
        images: [""],
      });
    } catch (error) {
      console.error("Error creating project:", error);
      alert("Failed to create project. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto py-8 px-4 max-w-2xl">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">
            Add New Project
          </CardTitle>
          <CardDescription className="text-center">
            Create a new project entry with all the necessary details
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="md:grid grid-cols-2 gap-4 space-y-6 ">
              {/* Project Name */}
              <div className="mb-2 space-y-2">
                <Label htmlFor="name">Project Name *</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Enter project name"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  required
                />
              </div>

              {/* Banner Image */}
              <div className="space-y-2">
                <Label htmlFor="bannerImage">Banner Image URL *</Label>
                <Input
                  id="bannerImage"
                  type="url"
                  placeholder="https://example.com/banner.jpg"
                  value={formData.bannerImage}
                  onChange={(e) =>
                    handleInputChange("bannerImage", e.target.value)
                  }
                  required
                />
              </div>
            </div>

            {/* Description */}
            <div className="space-y-2">
              <Label htmlFor="description">Description *</Label>
              <Textarea
                id="description"
                placeholder="Describe your project..."
                value={formData.description}
                onChange={(e) =>
                  handleInputChange("description", e.target.value)
                }
                rows={4}
                required
              />
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Label>Additional Descriptions</Label>
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={addMultipleDescriptionField}
                  className="flex items-center gap-2 bg-transparent"
                >
                  + Add Description
                </Button>
              </div>

              {formData.multipleDescriptions.map((description, index) => (
                <div key={index} className="flex gap-2">
                  <Textarea
                    placeholder={`Additional description ${index + 1}`}
                    value={description}
                    onChange={(e) =>
                      handleMultipleDescriptionChange(index, e.target.value)
                    }
                    rows={2}
                    className="flex-1"
                  />
                  {formData.multipleDescriptions.length > 1 && (
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={() => removeMultipleDescriptionField(index)}
                      className="px-3"
                    >
                      ×
                    </Button>
                  )}
                </div>
              ))}
            </div>

            <div className="md:grid grid-cols-2 gap-4 space-y-6">
              {/* Live Link */}
              <div className="space-y-2">
                <Label htmlFor="liveLink">Live Demo URL *</Label>
                <Input
                  id="liveLink"
                  type="url"
                  placeholder="https://your-project-demo.com"
                  value={formData.liveLink}
                  onChange={(e) =>
                    handleInputChange("liveLink", e.target.value)
                  }
                />
              </div>

              {/* GitHub Link */}
              <div className="space-y-2">
                <Label htmlFor="githubLink">GitHub Repository URL *</Label>
                <Input
                  id="githubLink"
                  type="url"
                  placeholder="https://github.com/username/repository"
                  value={formData.githubLink}
                  onChange={(e) =>
                    handleInputChange("githubLink", e.target.value)
                  }
                />
              </div>
            </div>

            {/* Server Link */}
            <div className="space-y-2">
              <Label htmlFor="serverLink">Server URL</Label>
              <Input
                id="serverLink"
                type="url"
                placeholder="https://your-server.com"
                value={formData.serverLink}
                onChange={(e) =>
                  handleInputChange("serverLink", e.target.value)
                }
              />
            </div>

            {/* Technologies */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Label>Technologies Used</Label>
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={addTechnologyField}
                  className="flex items-center gap-2 bg-transparent"
                >
                  + Add Technology
                </Button>
              </div>

              {formData.technologies.map((technology, index) => (
                <div key={index} className="flex gap-2">
                  <Input
                    type="text"
                    placeholder={`Technology ${
                      index + 1
                    } (e.g., React, Node.js)`}
                    value={technology}
                    onChange={(e) =>
                      handleTechnologyChange(index, e.target.value)
                    }
                    className="flex-1"
                  />
                  {formData.technologies.length > 1 && (
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={() => removeTechnologyField(index)}
                      className="px-3"
                    >
                      ×
                    </Button>
                  )}
                </div>
              ))}
            </div>

            {/* Additional Images */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Label>Additional Images</Label>
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={addImageField}
                  className="flex items-center gap-2 bg-transparent"
                >
                  + Add Image
                </Button>
              </div>

              {formData.images.map((image, index) => (
                <div key={index} className="flex gap-2">
                  <Input
                    type="url"
                    placeholder={`Image ${index + 1} URL`}
                    value={image}
                    onChange={(e) => handleImageChange(index, e.target.value)}
                    className="flex-1"
                  />
                  {formData.images.length > 1 && (
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={() => removeImageField(index)}
                      className="px-3"
                    >
                      ×
                    </Button>
                  )}
                </div>
              ))}
            </div>

            {/* Submit Button */}
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? "Creating Project..." : "Create Project"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default AddProjects;
