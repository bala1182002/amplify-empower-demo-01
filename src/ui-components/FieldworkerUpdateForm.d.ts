/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type FieldworkerUpdateFormInputValues = {
    fwname?: string;
    fwlocation?: string;
    jobassgned?: string;
    jobstatus?: boolean;
    jobcompletiondateandtime?: string;
    jobiuploadmage?: string;
};
export declare type FieldworkerUpdateFormValidationValues = {
    fwname?: ValidationFunction<string>;
    fwlocation?: ValidationFunction<string>;
    jobassgned?: ValidationFunction<string>;
    jobstatus?: ValidationFunction<boolean>;
    jobcompletiondateandtime?: ValidationFunction<string>;
    jobiuploadmage?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FieldworkerUpdateFormOverridesProps = {
    FieldworkerUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    fwname?: PrimitiveOverrideProps<TextFieldProps>;
    fwlocation?: PrimitiveOverrideProps<TextFieldProps>;
    jobassgned?: PrimitiveOverrideProps<TextFieldProps>;
    jobstatus?: PrimitiveOverrideProps<SwitchFieldProps>;
    jobcompletiondateandtime?: PrimitiveOverrideProps<TextFieldProps>;
    jobiuploadmage?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type FieldworkerUpdateFormProps = React.PropsWithChildren<{
    overrides?: FieldworkerUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    fieldworker?: any;
    onSubmit?: (fields: FieldworkerUpdateFormInputValues) => FieldworkerUpdateFormInputValues;
    onSuccess?: (fields: FieldworkerUpdateFormInputValues) => void;
    onError?: (fields: FieldworkerUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: FieldworkerUpdateFormInputValues) => FieldworkerUpdateFormInputValues;
    onValidate?: FieldworkerUpdateFormValidationValues;
} & React.CSSProperties>;
export default function FieldworkerUpdateForm(props: FieldworkerUpdateFormProps): React.ReactElement;
