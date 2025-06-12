import { useParams } from "react-router";
import { useProfile } from "../../lib/hooks/useProfile";
import { editProfielSchema } from "../../lib/schemas/editProfileSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { Box, Button } from "@mui/material";
import TextInput from "../../app/shared/components/TextInput";

type Props = {
    setEditMode: (editMode: boolean) => void;
}

export default function ProfileEdit({ setEditMode }: Props) {
    const { id } = useParams();
    const { updateProfile, profile } = useProfile(id);
    const { control, handleSubmit, reset, formState: {isDirty, isValid } } = useForm<editProfielSchema>({
            resolver: zodResolver(editProfielSchema),
            mode: 'onTouched'
        });
        
        const onSubmit = (data: EditProfileSchema) => {
            updateProfile.mutate(data, {
                onSuccess: () => setEditMode(false)
            });
        }

        useEffect(() => {
            reset({
                displayName: profile?.displayName,
                bio: profile?.bio || ''
            });
        }, [profile, reset]);

        return (
            <Box component='form'
                onSubmit={handleSubmit(onSubmit)}
                display='flex'
                flexDirection='column'
                alignContent='center'
                gap={3}
                mt={3}
            >
                <TextInput label='Display Name' name='displayName' control={control}/>
                <TextInput 
                    label='Add your bio'
                    name='bio'
                    control={control}
                    multiline
                    rows={4}
                />
                <Button
                    type='submit'
                    variant='contained'
                    disabled={!isValid || !isDirty || updateProfile.isPending}
                >
                    Update Profile
                </Button>
            </Box>
        );
}